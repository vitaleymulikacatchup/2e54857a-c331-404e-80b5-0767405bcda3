use client

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: 'heroImage', url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A robotic hand reaching into a digital network on a blue background, symbolizing AI technology.' },
  { id: 'aboutImage', url: 'https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two professionals working at a shared office desk, top view.' },
  { id: 'contactImage', url: 'https://images.pexels.com/photos/2794212/pexels-photo-2794212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A woman sitting against a motivational mural reading 'What You Do Matters' in Birmingham, AL.' }
];

export default function Home() {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navItems} brandName="Clean AI" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Elevate Your Processes with AI"
            description="Revolutionize your business with our cutting-edge AI solutions."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url}
            buttons={[{ text: 'Get Started', href: 'features' }, { text: 'Learn More', href: 'about' }]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We empower teams with AI innovation"
            buttons={[{ text: 'Discover More', href: 'about' }]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: 'Custom AI Solutions', description: 'Tailored to your specific business needs.', icon: 'Zap' },
              { title: 'Seamless Integration', description: 'Integrates with your existing systems effortlessly.', icon: 'CheckCircle' }
            ]}
            title="Our Features"
            className="bg-blue-50"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            title="Choose Your Plan"
            plans={[
              { id: 'starter', price: '$29/mo', subtitle: 'Ideal for small teams', features: ['5 AI projects', 'Basic support'], badge: 'Starter', badgeIcon: 'Sparkles' },
              { id: 'enterprise', price: '$99/mo', subtitle: 'All-in-one solution', features: ['Unlimited projects', '24/7 support'], badge: 'Best Value', badgeIcon: 'Award' },
              { id: 'basic', price: '$49/mo', subtitle: 'Suitable for startups', features: ['3 AI projects', 'Email support'], badge: 'Basic', badgeIcon: 'Sparkles' } 
            ]}
            className="bg-blue-50"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact us for a personalized demo"
            description="Fill out the form below to arrange a call with our experts."
            imageSrc={assetMap.find(a => a.id === 'contactImage')?.url}
            mediaPosition="left"
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Company', items: [{ label: 'About Us', href: 'about' }, { label: 'Careers', href: 'careers' }] },
              { title: 'Support', items: [{ label: 'Contact', href: 'contact' }, { label: 'Privacy Policy', href: 'privacy-policy' }] }
            ]}
            copyrightText="© 2025 Clean AI"
            className="bg-blue-50"
            columnsClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}