import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="animate-hero-title">
            <h1
              className="text-2xl md:text-3xl font-normal mb-4 leading-tight"
              style={{ fontFamily: "var(--font-ibm-plex-serif), serif" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated January 30, 2026</p>
          </div>

          <div className="prose prose-sm max-w-none animate-hero-subtitle space-y-8">
            {/* Introduction */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              This Privacy Notice for Nuaroom, Inc. (doing business as Heurica) ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>Visit our website at <a href="https://heurica.co" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>heurica.co</a> or any website of ours that links to this Privacy Notice</li>
              <li>Download and use our mobile application (Heurica), or any other application of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>

            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:contact@heurica.co" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>contact@heurica.co</a>.
            </p>

            {/* Summary */}
            <div className="border border-border/30 rounded-xl bg-card/50 p-6 my-8">
              <h2 className="text-lg font-semibold mb-4">Summary of Key Points</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by reading the full sections below.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
                <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
                <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
                <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
                <li><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information.</li>
              </ul>
            </div>

            {/* Table of Contents */}
            <h2 className="text-lg font-semibold mt-12 mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li><a href="#infocollect" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>What Information Do We Collect?</a></li>
              <li><a href="#infouse" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>How Do We Process Your Information?</a></li>
              <li><a href="#legalbases" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>What Legal Bases Do We Rely On?</a></li>
              <li><a href="#whoshare" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>When and With Whom Do We Share Your Information?</a></li>
              <li><a href="#cookies" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Do We Use Cookies?</a></li>
              <li><a href="#ai" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Do We Offer AI-Based Products?</a></li>
              <li><a href="#inforetain" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>How Long Do We Keep Your Information?</a></li>
              <li><a href="#infosafe" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>How Do We Keep Your Information Safe?</a></li>
              <li><a href="#infominors" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Do We Collect Information From Minors?</a></li>
              <li><a href="#privacyrights" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>What Are Your Privacy Rights?</a></li>
              <li><a href="#DNT" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Controls for Do-Not-Track Features</a></li>
              <li><a href="#uslaws" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Do US Residents Have Specific Rights?</a></li>
              <li><a href="#policyupdates" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Do We Make Updates to This Notice?</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>How Can You Contact Us?</a></li>
            </ol>

            {/* Section 1 */}
            <section id="infocollect" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">1. What Information Do We Collect?</h2>

              <h3 className="text-base font-medium mt-6 mb-3">Personal information you disclose to us</h3>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We collect personal information that you provide to us.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
                <li>Names</li>
                <li>Email addresses</li>
                <li>Contact or authentication data</li>
                <li>Job titles</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>

              <h3 className="text-base font-medium mt-6 mb-3">Information automatically collected</h3>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The information we collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services.</li>
                <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services.</li>
                <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise.</li>
              </ul>

              <h3 className="text-base font-medium mt-6 mb-3">Google API</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>Limited Use requirements</a>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="infouse" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">2. How Do We Process Your Information?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li><strong>To facilitate account creation and authentication</strong> and otherwise manage user accounts.</li>
                <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
                <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="legalbases" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">3. What Legal Bases Do We Rely On to Process Your Information?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you are located in the EU or UK, this section applies to you. The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information.
              </p>
            </section>

            {/* Section 4 */}
            <section id="whoshare" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">4. When and With Whom Do We Share Your Personal Information?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We may share information in specific situations described in this section and/or with specific third parties.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may need to share your personal information in situations including business transfers, when we have your consent, or to comply with laws.
              </p>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">5. Do We Use Cookies and Other Tracking Technologies?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services.
              </p>
            </section>

            {/* Section 6 */}
            <section id="ai" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">6. Do We Offer Artificial Intelligence-Based Products?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <strong>Use of Third-Party AI Technologies.</strong> We use third-party AI service providers to help generate AI-generated content, including Anthropic and OpenAI.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>How We Process Your Data Using AI.</strong> All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.
              </p>
            </section>

            {/* Section 7 */}
            <section id="inforetain" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">7. How Long Do We Keep Your Information?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            {/* Section 8 */}
            <section id="infosafe" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">8. How Do We Keep Your Information Safe?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            {/* Section 9 */}
            <section id="infominors" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">9. Do We Collect Information From Minors?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
              </p>
            </section>

            {/* Section 10 */}
            <section id="privacyrights" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">10. What Are Your Privacy Rights?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, to request rectification or erasure, to restrict the processing of your personal information, and if applicable, to data portability.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent by contacting us using the contact details provided below.
              </p>
            </section>

            {/* Section 11 */}
            <section id="DNT" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">11. Controls for Do-Not-Track Features</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized.
              </p>
            </section>

            {/* Section 12 */}
            <section id="uslaws" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">12. Do United States Residents Have Specific Privacy Rights?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may use and disclose your personal information for our operational business purposes. You have the right to opt out of the sale or sharing of personal information, as well as targeted advertising and profiling.
              </p>
            </section>

            {/* Section 13 */}
            <section id="policyupdates" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">13. Do We Make Updates to This Notice?</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">
                <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="mt-12">
              <h2 className="text-lg font-semibold mb-4">14. How Can You Contact Us About This Notice?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:contact@heurica.co" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>contact@heurica.co</a> or contact us by post at:
              </p>
              <address className="text-sm text-muted-foreground not-italic">
                Nuaroom, Inc.<br />
                (doing business as Heurica)<br />
                United States
              </address>
            </section>

            {/* Section 15 */}
            <section id="request" className="mt-12 mb-8">
              <h2 className="text-lg font-semibold mb-4">15. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please email us at <a href="mailto:contact@heurica.co" className="hover:text-foreground transition-colors" style={{ color: 'var(--accent-gold)' }}>contact@heurica.co</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
