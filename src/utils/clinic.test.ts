import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildTreatmentWhatsAppMessage,
  buildWhatsAppUrl,
  CLINIC_INFO,
  getClinicOpenStatus,
  NAV_ITEMS,
  TREATMENTS,
  WHATSAPP_PHONE,
} from './clinic';

test('buildWhatsAppUrl encodes default and custom messages cleanly', () => {
  const defaultUrl = buildWhatsAppUrl();
  assert.ok(defaultUrl.startsWith(`https://wa.me/${WHATSAPP_PHONE}?text=`));
  assert.ok(defaultUrl.includes('Gostaria%20de%20agendar'));

  const customUrl = buildWhatsAppUrl('  Olá equipe!  ');
  assert.equal(
    customUrl,
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Olá equipe!')}`
  );
});

test('buildTreatmentWhatsAppMessage includes selected treatment title', () => {
  for (const item of TREATMENTS) {
    const msg = buildTreatmentWhatsAppMessage(item.title);
    assert.ok(msg.includes(item.title));
    assert.ok(msg.includes('Bellos Dentes Concept'));
  }
});

test('getClinicOpenStatus evaluates weekday, saturday, and sunday hours in America/Sao_Paulo', () => {
  // Wednesday 10:00 BRT -> 13:00 UTC
  const wednesdayOpen = new Date('2026-11-25T13:00:00.000Z');
  assert.equal(getClinicOpenStatus(wednesdayOpen).isOpen, true);
  assert.equal(getClinicOpenStatus(wednesdayOpen).label, 'Aberto agora');

  // Wednesday 20:00 BRT -> 23:00 UTC (closed)
  const wednesdayClosed = new Date('2026-11-25T23:00:00.000Z');
  assert.equal(getClinicOpenStatus(wednesdayClosed).isOpen, false);

  // Saturday 11:00 BRT -> 14:00 UTC (open until 14:00)
  const saturdayOpen = new Date('2026-11-28T14:00:00.000Z');
  assert.equal(getClinicOpenStatus(saturdayOpen).isOpen, true);

  // Saturday 15:00 BRT -> 18:00 UTC (closed)
  const saturdayClosed = new Date('2026-11-28T18:00:00.000Z');
  assert.equal(getClinicOpenStatus(saturdayClosed).isOpen, false);

  // Sunday 10:00 BRT -> 13:00 UTC (closed)
  const sundayClosed = new Date('2026-11-29T13:00:00.000Z');
  assert.equal(getClinicOpenStatus(sundayClosed).isOpen, false);
  assert.equal(getClinicOpenStatus(sundayClosed).label, 'Fechado no momento');
});

test('navigation and treatments maintain expected count and required fields', () => {
  assert.equal(NAV_ITEMS.length, 5);
  assert.equal(TREATMENTS.length, 6);
  assert.equal(CLINIC_INFO.cep, 'CEP 09070-210');
  for (const treatment of TREATMENTS) {
    assert.ok(treatment.image.startsWith('/Cl-nica-/src/assets/images/'));
    assert.ok(treatment.imageAlt.length > 10);
  }
});
