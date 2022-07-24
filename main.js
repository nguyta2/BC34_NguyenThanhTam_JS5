// 1. Quản lý tuyển sinh
const A_ZONE = 2;
const B_ZONE = 1;
const C_ZONE = 0.5;
const MEMBER_1 = 2.5;
const MEMBER_2 = 1.5;
const MEMBER_3 = 1;

function getZone(zone_in) {
  switch (zone_in) {
    case "A":
      return A_ZONE;
    case "B":
      return B_ZONE;
    case "C":
      return C_ZONE;
    default:
      return 0;
  }
}

function getMember(member_in) {
  switch (member_in) {
    case "1":
      return MEMBER_1;
    case "2":
      return MEMBER_2;
    case "3":
      return MEMBER_3;
    default:
      return 0;
  }
}

function checkResult(
  score_in,
  score1_in,
  score2_in,
  score3_in,
  addedZoneScore_in,
  addedMemberScore_in
) {
  var result = "";
  if (score1_in === 0 || score2_in === 0 || score3_in === 0) {
    result = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else {
    var actualScore =
      score1_in +
      score2_in +
      score3_in +
      addedZoneScore_in +
      addedMemberScore_in;
    if (actualScore < score_in) {
      result = "Bạn đã rớt. Tổng điểm: " + actualScore;
    } else {
      result = "Bạn đã đậu. Tổng điểm: " + actualScore;
    }
  }
  return result;
}
document.getElementById("btnResult").onclick = function () {
  // input
  var score = document.getElementById("score").value * 1;
  var zone = document.getElementById("zone").value;
  var member = document.getElementById("member").value;
  var score1 = document.getElementById("score1").value * 1;
  var score2 = document.getElementById("score2").value * 1;
  var score3 = document.getElementById("score3").value * 1;

  // process
  var addedZoneScore = getZone(zone);
  var addedMemberScore = getMember(member);

  // output
  var output = checkResult(
    score,
    score1,
    score2,
    score3,
    addedZoneScore,
    addedMemberScore
  );
  document.getElementById("announceResult").innerHTML = output;
};

// 2. Tính tiền điện
function calcElectricityPrice(Kw_in) {
  var result = 0;
  if (Kw_in > 0 && Kw_in <= 50) {
    result = Kw_in * 500;
  } else if (Kw_in > 50 && Kw_in <= 100) {
    result = 50 * 500 + (Kw_in - 50) * 650;
  } else if (Kw_in > 100 && Kw_in <= 200) {
    result = 50 * 500 + 50 * 650 + (Kw_in - 100) * 850;
  } else if (Kw_in > 200 && Kw_in <= 350) {
    result = 50 * 500 + 50 * 650 + 100 * 850 + (Kw_in - 200) * 1100;
  } else if (Kw_in > 350) {
    result =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Kw_in - 350) * 1300;
  } else {
    alert("invalid");
  }
  return result;
}

document.getElementById("btnCalcElectricity").onclick = function () {
  // input
  var name = document.getElementById("name").value;
  var Kw = document.getElementById("Kw").value * 1;

  // process
  var electricityPrice = calcElectricityPrice(Kw);
  var format = new Intl.NumberFormat("vn-VN").format(electricityPrice);

  // output
  var output = "";
  output = "Họ tên: " + name + "; Tiền điện: " + format;
  document.getElementById("announceElectricity").innerHTML = output;
};
