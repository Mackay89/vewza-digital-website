export const metadata = {
  title: "Terms and Conditions | VEWZA",
  description: "Terms and conditions for using the VEWZA website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold">Terms and Conditions</h1>
      <p className="mb-8 text-sm text-gray-500">Last updated: 25 November 2026</p>

      <section className="space-y-6">
        <div>
          <h2 className="mb-2 text-xl font-semibold">1. About VEWZA</h2>
          <p>VEWZA (PTY) LTD operates the VEWZA website and provides digital services. These terms govern your use of this website.</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">2. Website use</h2>
          <p>You agree to use this website lawfully and not to misuse, disrupt, damage, or attempt to gain unauthorised access to its systems.</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">3. Services and information</h2>
          <p>Information on this website is provided for general business and informational purposes. Specific services, deliverables, fees, and timelines may be subject to a separate written agreement.</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">4. Intellectual property</h2>
          <p>Website content, branding, graphics, and other materials may be protected by intellectual property laws. You may not reproduce or use them without permission, except where permitted by law.</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">5. Limitation of liability</h2>
          <p>Nothing in these terms excludes liability where it cannot lawfully be excluded. To the extent permitted by law, VEWZA is not responsible for losses arising from interruptions, errors, or misuse of the website.</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">6. Changes and contact</h2>
          <p>These terms may be updated from time to time. For questions, contact info@vewza.co.za.</p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">7. Governing law</h2>
          <p>These terms are governed by the laws of the Republic of South Africa.</p>
        </div>
      </section>
    </main>
  );
}
