export default function format(num) {
  return "BDT" + " " + Number(num.toFixed(1)).toLocaleString() + " " + "TK";
}
