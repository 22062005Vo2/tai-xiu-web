function datCuoc(nguoiChon) {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;
  const tong = dice1 + dice2 + dice3;

  let ketQua = (tong >= 4 && tong <= 10) ? 'xiu' : 'tai';

  document.getElementById('xucxac').innerText = Xúc xắc: ${dice1}, ${dice2}, ${dice3} (Tổng: ${tong});
  document.getElementById('ketqua').innerText = Kết quả: ${ketQua.toUpperCase()};

  if (nguoiChon === ketQua) {
    document.getElementById('thangthua').innerText = "🎉 Bạn thắng!";
  } else {
    document.getElementById('thangthua').innerText = "💥 Bạn thua!";
  }
}