// src/components/SectionCard.jsx
function SectionCard({ title, num, children }) {
  return (
    <section className="section-card">
      <div className="section-header">
        <span className="section-num">{num}</span>
        <span className="section-title">{title}</span>
      </div>
      {children} 
    </section>
  );
}
export default SectionCard;