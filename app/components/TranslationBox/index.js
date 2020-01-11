const TranslationBox = ({ translation: [original, translated] }) => (
  <div className="translation-box">
    <div className="content original">
      <span className="label">Definição original:</span>
      <strong className="text">{original}</strong>
    </div>
    <div className="content translation">
      <span className="label">Tradução:</span>
      <strong className="text">{translated}</strong>
    </div>
  </div>
)

export default TranslationBox
