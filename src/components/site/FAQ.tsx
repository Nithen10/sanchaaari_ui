import type { FaqGroup } from "@/data/faqs";

export default function FAQ({
  groups,
  flatten = false,
}: {
  groups: FaqGroup[];
  flatten?: boolean;
}) {
  if (flatten) {
    const all = groups.flatMap((g) => g.items);
    return (
      <div className="faq">
        {all.map((item, i) => (
          <details className="faq-item" key={i}>
            <summary>{item.q}</summary>
            <div className="faq-body">{item.a}</div>
          </details>
        ))}
      </div>
    );
  }

  return (
    <div className="faq-groups">
      {groups.map((group) => (
        <section key={group.category} className="faq-group">
          <h3 className="faq-group__title">{group.category}</h3>
          {group.items.map((item, i) => (
            <details className="faq-item" key={`${group.category}-${i}`}>
              <summary>{item.q}</summary>
              <div className="faq-body">{item.a}</div>
            </details>
          ))}
        </section>
      ))}

      <style>{`
        .faq-groups { display: flex; flex-direction: column; gap: 3rem; }
        .faq-group__title {
          font-family: var(--font-fraunces), serif;
          font-size: 1.5rem;
          color: var(--heritage-ink);
          margin-bottom: 1rem;
          padding-bottom: 0.625rem;
          border-bottom: 2px solid var(--heritage-rust);
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
