import { Button } from '@/components/commons/button'

interface CTAFooterButton {
  label: string
  onClick?: () => void
  href?: string
}

interface CTAFooterProps {
  title: string
  description: string
  button: CTAFooterButton
  subDescription?: string
  className?: string
}

export const CTAFooter = ({
  title,
  description,
  button,
  subDescription,
  className = '',
}: CTAFooterProps) => {
  return (
    <section
      className={`
        w-full max-w-sm md:max-w-none mx-auto px-0 md:px-6 py-0 md:py-8
        ${className}
      `}
    >
      <div
        className="relative overflow-hidden shadow-[0_10px_40px_rgba(0,110,136,0.25)] transition-all duration-500 hover:shadow-[0_15px_50px_rgba(0,110,136,0.35)] min-h-[26.5rem] md:min-h-[21.625rem] p-2 rounded-[var(--spt-radius-7)]"
        style={{
          background:
            'linear-gradient(180deg, var(--spt-primary-400) 0%, var(--spt-gradient-mid) 50%, var(--spt-secondary-400) 100%)',
        }}
      >
        {/*gradient */}
        <div className="absolute inset-0 bg-linear-to-tr from-spt-secondary-400/20 via-transparent to-spt-primary-200/30 pointer-events-none" />

        {/* Content */}
        <div className="gap-5 p-5 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-md md:max-w-5xl min-h-[24.5rem] md:min-h-[21.625rem] mx-auto px-10 md:px-10 gap-6 p-6">
          {/* Text */}
          <div className="text-left w-full max-w-md md:max-w-2xl flex flex-col justify-center gap-3  font-prompt ">
            <h2 className="text-white font-bold drop-shadow-sm text-3xl md:text-5xl leading-[135%] md:leading-tight tracking-normal">
              {title}
            </h2>
            <p className="pr-8 cta-footer-description font-normal text-lg leading-7 tracking-normal text-white/90">
              {description}
            </p>
          </div>
          {/* Button */}
          <div className="flex flex-col items-center w-full md:w-auto gap-3">
            {button.href ? (
              <a href={button.href} className="w-full md:w-auto">
                <Button
                  label={button.label}
                  size="xl"
                  variant="rounded"
                  className="bg-white text-spt-primary-400 hover:bg-white/95 hover:text-spt-primary-500 font-bold w-full md:min-w-60 h-15 transition-all duration-300 hover:scale-105 active:scale-95 rounded-[var(--spt-radius-7)] shadow-[var(--spt-cta-button-shadow)]"
                  onClick={button.onClick}
                />
              </a>
            ) : (
              <Button
                label={button.label}
                size="xl"
                variant="rounded"
                className="bg-white text-spt-primary-400 hover:bg-white/95 hover:text-spt-primary-500 font-bold w-full md:min-w-60 h-15 transition-all duration-300 hover:scale-105 active:scale-95 rounded-[var(--spt-radius-7)] shadow-[var(--spt-cta-button-shadow)]"
                onClick={button.onClick}
              />
            )}

            {subDescription && (
              <p className="text-white/80 text-sm font-light tracking-wide drop-shadow-sm text-center w-full md:w-60">
                {subDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
