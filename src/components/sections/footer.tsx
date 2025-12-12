import React from 'react';


const Footer = () => {
  const footerLinks = {
    Resources: [
    { name: 'User guide', href: 'https://docs.anara.com/' },
    { name: 'Changelog', href: 'https://anara.com/changelog' },
    { name: 'Join Discord', href: 'https://discord.gg/7c9ucr3DZJ' },
    { name: 'Blog', href: 'https://anara.com/blog' },
    { name: 'FAQs', href: 'https://anara.com/faqs' }],

    Company: [
    { name: 'Careers', href: 'https://www.ycombinator.com/companies/anara/jobs/' },
    { name: 'Support', href: null },
    { name: 'Contact', href: 'mailto:support@anara.com' },
    { name: 'Press kit', href: 'https://drive.google.com/drive/folders/1czxkRszv11zHu-gAEj53Dfgj-CYHq44G' },
    { name: 'Affiliates', href: 'https://partners.dub.co/anara' }],

    Products: [
    { name: 'Web application', href: 'https://anara.com/new' },
    { name: 'Chrome extension', href: 'https://chromewebstore.google.com/detail/unriddle-ai-generated-sum/iinmigjlcpeckfihbbfajpkiilfmakff' },
    { name: 'PDF viewer', href: 'https://lector-weld.vercel.app/' }],

    Legal: [
    { name: 'Terms', href: 'https://anara.com/docs/legal/terms' },
    { name: 'DPA', href: 'https://anara.com/dpa' },
    { name: 'Privacy', href: 'https://anara.com/docs/legal/privacy' },
    { name: 'Subprocessors', href: 'https://anara.com/subprocessors' },
    { name: 'Trust center', href: 'https://trust.delve.co/anara' },
    { name: 'Cookies', href: null }],

    Socials: [
    { name: 'X (Twitter)', href: 'https://x.com/anara' },
    { name: 'Instagram', href: 'https://www.instagram.com/anaralabs/' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@anaralabs' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/anaralabs/' }]

  };

  const complianceLinks = [
  { name: 'GDPR', href: 'https://trust.delve.co/anara' },
  { name: 'SOC 2', href: 'https://trust.delve.co/anara' },
  { name: 'ISO27001', href: 'https://trust.delve.co/anara' }];


  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-[1280px] px-9 md:px-13 lg:px-16 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="lg:max-w-xs flex-shrink-0">
            <h3 className="text-xl font-semibold leading-tight text-foreground !whitespace-pre-line">Merus — AI forscientific advancement<br /></h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 flex-1">
            {Object.entries(footerLinks).map(([title, links]) =>
            <div key={title}> 
                <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) =>
                <li key={link.name}>
                      <span className="text-sm text-muted-foreground">{link.name}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs text-muted-foreground sm:justify-start">
                <div className="flex gap-4">
                  {complianceLinks.map((link) =>
                <span
                  key={link.name}
                  className="rounded-md border bg-card px-2 py-0.5 text-xs font-medium text-muted-foreground">

                      {link.name}
                    </span>
                )}
                </div>
                <p className="text-center sm:text-left">
                  Sub-processors include Stripe, Vercel and AWS.
                </p>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2025 Merus Labs, Inc
            </p>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;
