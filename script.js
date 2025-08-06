script.js 
let balance = 10000;
let history = [];

function play(type) {
  const amount = parseInt(document.getElementById('bet-amount').value);
  if (!amount || amount <= 0 || amount > balance) {
    alert("Nhập số tiền cược hợp lệ!");
    return;
  }

  const dice = [roll(), roll(), roll()];
  const sum = dice.reduce((a, b) => a + b);
  const result = sum >= 11 ? 'tai' : 'xiu';
  const diceHtml = dice.map(n => <span>🎲${n}</span>).join('');

  document.getElementById('dice').innerHTML = diceHtml;

  let msg = Tổng: ${sum} → ${result.toUpperCase()} - ;
  if (result === type) {
    balance += amount;
    msg += "Thắng!";
  } else {
    balance -= amount;
    msg += "Thua!";
  }

  history.unshift(result.toUpperCase());
  document.getElementById('history').innerHTML = history.slice(0, 10).map(h => <li>${h}</li>).join('');
  document.getElementById('balance').textContent = balance;
  document.getElementById('result').textContent = msg;
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function quayHu() {
  const icons = ['🍒', '🍋', '🍉', '🍇', '7️⃣'];
  const s1 = icons[Math.floor(Math.random() * icons.length)];
  const s2 = icons[Math.floor(Math.random() * icons.length)];
  const s3 = icons[Math.floor(Math.random() * icons.length)];
  document.getElementById('slot1').textContent = s1;
  document.getElementById('slot2').textContent = s2;
  document.getElementById('slot3').textContent = s3;

  const result = (s1 === s2 && s2 === s3) ? "🎉 Trúng thưởng lớn!" : "Thử lại nhé!";
  document.getElementById('quay-result').textContent = result;
}

function showSection(id) {
  document.querySelectorAll('.game-section').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function resetGame() {
  balance = 10000;
  history = [];
  document.getElementById('balance').textContent = balance;
  document.getElementById('history').innerHTML = '';
  document.getElementById('result').textContent = '';
  document.getElementById('quay-result').textContent = '';
}
