import { Button } from '@/components/commons/button'

interface CTAFooterProps {
  title: string
  detail: string
  button: {
    label: string
    onClick?: () => void
    href?: string
  }
  subdetail?: string
  className?: string
}

export const CTAFooter = ({ title, detail, button, subdetail, className = '' }: CTAFooterProps) => {
  return (
    <section
      className={`
        w-full max-w-[311px] md:max-w-[2142px] mx-auto px-0 md:px-6 py-0 md:py-8
        ${className}
      `}
    >
      <div
        className="relative overflow-hidden shadow-[0_10px_40px_rgba(0,110,136,0.25)] transition-all duration-500 hover:shadow-[0_15px_50px_rgba(0,110,136,0.35)] min-h-[425px] md:min-h-[346px]"
        style={{
          borderRadius: 'var(--spt-radius-7)',
          padding: 'var(--spt-spacing-2)',
          background:
            'linear-gradient(180deg, var(--spt-primary-400) 0%, var(--spt-gradient-mid) 50%, var(--spt-secondary-400) 100%)',
        }}
      >
        {/*gradient */}
        <div className="absolute inset-0 bg-linear-to-tr from-spt-secondary-400/20 via-transparent to-spt-primary-200/30 pointer-events-none" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full max-w-[279px] md:max-w-[1103px] h-[393px] md:h-[346px] mx-auto md:px-20"
          style={{
            gap: 'var(--spt-spacing-2)',
            padding: 'var(--spt-spacing-2)',

          }}
        >
          {/* Text */}
          <div
            className="text-left w-[247px]  md:w-[600px] h-[280px] md:h-[186px] flex flex-col justify-center"
            style={{ gap: 'var(--spt-spacing-3)' }}
          >
            <h2
              className="text-white font-bold drop-shadow-sm md:w-auto md:h-auto text-[32px] md:text-5xl leading-[135%] md:leading-tight"
              style={{
                fontFamily: 'var(--font-prompt)',
                letterSpacing: '0px'
              }}
            >
              {title}
            </h2>
            <p
              className="font-normal md:w-auto md:h-auto"
              style={{
                fontFamily: 'var(--font-prompt)',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0px',
                color: '#FFFFFFE5'
              }}
            >
              {detail}
            </p>
          </div>
          {/* Button */}
          <div className="flex flex-col items-center w-full md:w-auto" style={{ gap: 'var(--spt-spacing-3)' }}>
            {button.href ? (
              <a href={button.href} className="w-full md:w-auto">
                <Button
                  label={button.label}
                  size="xl"
                  variant="rounded"
                  className="bg-white text-spt-primary-400 hover:bg-white/95 hover:text-spt-primary-500 font-bold w-full md:min-w-[238px] h-[60px] transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    borderRadius: 'var(--spt-radius-7)',
                    boxShadow: 'var(--spt-cta-button-shadow)',
                  }}
                  onClick={button.onClick}
                />
              </a>
            ) : (
              <Button
                label={button.label}
                size="xl"
                variant="rounded"
                className="bg-white text-spt-primary-400 hover:bg-white/95 hover:text-spt-primary-500 font-bold w-full md:min-w-[238px] h-[60px] transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  borderRadius: 'var(--spt-radius-7)',
                  boxShadow: 'var(--spt-cta-button-shadow)',
                }}
                onClick={button.onClick}
              />
            )}

            {subdetail && (
              <p className=" text-white/80 text-sm font-light tracking-wide drop-shadow-sm text-center w-full md:w-[238px] h-[21px] flex items-center justify-center">
                {subdetail}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
