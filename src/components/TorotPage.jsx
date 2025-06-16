import { FaInstagram, FaLink } from 'react-icons/fa';

const torotSections = [
  {
    title: 'ספרות תורתית',
    links: [
      { name: 'ספרות פיקוד העורף (בלמ"ס)', url: 'https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/%D7%A4%D7%99%D7%A7%D7%95%D7%93-%D7%94%D7%A2%D7%95%D7%A8%D7%A3/', icon: <FaLink size={15} color="#C13584" /> },
      { name: 'עצי הידע בפיקוד העורף', url: 'https://drive.google.com/file/d/1QGblCHsdnAGU5CIsSDk3FeWgrANMA0hH/view', icon: <FaLink size={15} color="#C13584" /> },
    ],
  },
  {
    title: 'כתיבה צבאית ועברית תקנית',
    links: [
      { name: 'תו תקן למסמך הצבאי', url: 'https://drive.google.com/file/d/1ig3PjSY8ozeYt16ZeV1wvYwYyMsFDEzp/view', icon: <FaLink size={15} color="#C13584" /> },
      { name: 'מילון פיקוד העורף', url: 'https://docs.google.com/document/d/1BCwKb6ru9TPohRP7ATA32dDKL3myXNNb/edit?rtpof=true&sd=true&tab=t.0', icon: <FaLink size={15} color="#C13584" /> },
      { name: 'מילון הקיצורים של צה"ל', url: 'https://drive.google.com/file/d/1WdRDECeaeuX_5tfUSHHEniCSv3nTmw2N/view', icon: <FaLink size={15} color="#C13584" /> },
      { name: 'איך אומרים בעברית?', url: 'https://hebrew-academy.org.il/%d7%90%d7%99%d7%9a-%d7%90%d7%95%d7%9e%d7%a8%d7%99%d7%9d-%d7%91%d7%a2%d7%91%d7%a8%d7%99%d7%aa/', icon: <FaLink size={15} color="#C13584" /> },
      { name: 'אתר מילון פיקוד העורף', url: 'https://madorpele1.github.io/pakarDictionary/', icon: <FaLink size={15} color="#C13584" /> }
    ],
  },
  // {
  //   title: 'תחקור ומנשרי למידה',
  //   links: [
  //     { name: 'מנשרי למידה - עם כלביא', url: 'https://example.com/', icon: <FaLink size={15} color="#C13584" /> },
  //     { name: 'מנשרי למידה - חרבות ברזל', url: 'https://example.com/', icon: <FaLink size={15} color="#C13584" /> },
  //   ],
  // },
  {
    title: 'tohadsnews',
    links: [
      { name: 'Instagram', url: 'https://www.instagram.com/tohadsnews', icon: <FaInstagram size={20} color="#C13584" /> },
    ],
  },
];

export default function TorotPage() {
  return (
    <div className="torot-container">
      <h2 className="torot-title" >ספרות תורתית</h2>
      <div className="torot-grid">
        {torotSections.map((section, i) => (
          <div key={i} className="card">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, j) => (
                <li key={j}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon ? <>{link.icon} {link.name}</> : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}