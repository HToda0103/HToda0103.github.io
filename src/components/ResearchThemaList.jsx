import React from 'react'

function ResearchThemaList({resarchthemas}){
  return (
    <section id="research_thema">
    <h3>Research_thema</h3>
    <div className="resarch_thema-list">
      {resarchthemas.map((researchthema, index) => (
        <div className="thema-card" key={index}>
          <h4>{researchthema.resarch_thema}</h4>
          <p>{researchthema.research_outline}</p>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ResearchThemaList;