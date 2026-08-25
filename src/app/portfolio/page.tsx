export const metadata = {
  title: "Portfolio | Bookstagram Club",
  description: "Explore the success stories and brand transformations of authors within our ecosystem.",
};

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-bg-base)', textAlign: 'center' }}>
      <div className="container" style={{ padding: '80px 0' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary-navy)', fontSize: '3rem', marginBottom: '20px' }}>
          Author Success Portfolio
        </h1>
        <p style={{ color: 'var(--color-text-body)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          We are currently migrating our latest case studies into the new ecosystem. 
          Check back shortly to explore how we've helped authors build their professional identity and grow their readership.
        </p>
        <a href="/solutions" className="btn btn-primary">Explore Our Solutions</a>
      </div>
    </main>
  );
}
