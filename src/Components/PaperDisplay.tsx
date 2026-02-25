import "./PaperDisplay.css";

export type PaperLink = {
  label: "PDF" | "Code" | "BibTeX" | "Demo" | "Supplementary";
  url: string;
};

export type Paper = {
  id: string;
    title: string;
    authors: string;
    venue: string;
    year: string;
    summary: string;
    thumbnail?: string; // first page image or key figure
    tags?: string[];
    links: PaperLink[];
};

type Props = {
  papers: Paper[];
};



const PaperDisplay: React.FC<Props> = ({
  papers
}) => {
  return (
    <section className="papers">
      <div className="papers-list">
        {papers.map((paper) => (
          <article key={paper.id} className="paper-card">
            {paper.thumbnail && (
              <div className="paper-thumbnail">
                <img src={paper.thumbnail} alt={`${paper.title} preview`} />
              </div>
            )}

            <div className="paper-content">
              <h3 className="paper-title">{paper.title}</h3>

              <p className="paper-meta">
                {paper.authors}
              </p>

              <p className="paper-meta">
                {paper.venue} • {paper.year}
              </p>

              <p className="paper-summary">{paper.summary}</p>

              {paper.tags && paper.tags.length > 0 && (
                <div className="paper-tags">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="paper-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="paper-links">
                {paper.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaperDisplay;
