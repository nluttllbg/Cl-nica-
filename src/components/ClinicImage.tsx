import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ClinicImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallbackTitle?: string;
}

export function ClinicImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallbackTitle,
}: ClinicImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE7DC] via-[#E5D8C7] to-[#D8C4AD] text-[#352820] p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 text-[#A18A76] mb-2" aria-hidden="true" />
        <span className="font-editorial text-lg font-medium">
          {fallbackTitle ?? 'Bellos Dentes Concept'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
