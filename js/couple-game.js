const questions = [
  {
    q: "วันหยุดเราชอบทำอะไรด้วยกันที่สุด",
    c: ["1.เดินห้าง", "2.ดูหนัง", "3.เที่ยว"],
    correct: 2,
  },
  {
    q: "เราไปเที่ยวที่ไหนกันบ่อยสุด",
    c: ["1.ภูเขา ", "2.ทะเล", "3.สวนสัตย์"],
    correct: 1,
  },
  {
    q: "คำพูดที่เค้าชอบพูดกับอ้วนที่สุด",
    c: ["1.เธอรักเค้ามั้ย", "2.เธอรักเค้ามั้ยคะ", " 3.มึงรักกูมั้ยไอ่สัส"],
    correct: 0,
  },
  {
    q: "เค้าชอบให้อ้วนทำอะไรให้เค้า",
    c: ["1.พาไปขับรถเล่น", " 2.เต้นให้เค้าดู", " 3.นอนกอดกัน"],
    correct: 1,
  },
  {
    q: "วันวาเลนไทน์นี้เค้าอยากบอกกับอ้วนว่า",
    c: ["1.เค้า ", "2.รัก", "3.อ้วนน้าา"],
    correct: 1,
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
