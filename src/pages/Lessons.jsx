import a1 from "../images/1.jpg";
import a2 from "../images/2.jpg";
import a3 from "../images/3.jpg";
import a4 from "../images/4.jpg";

let imgs = [a1, a3, a4];

export default function Lessons() {
  return (
    <div className="lessons-page">
        <div className="lessons">
            {imgs.map((el, i) => (
                <div key={i} className="lesson">
                    <img src={el} alt="picture" />
                </div>
            ))}
        </div>
    </div>
  )
}
