const Compint = () => {
  let total = 0;
  let x = Number(Val);
  let i = 0;
  while (i < Duration) {
    total = Number(x) + Number(x) * Number(Int / 100);
    console.log(total);
    x = total + Number(Invest);
    setTotal(x);
    i++;
  }
  return Total;
};

test("find compound interest of user input numbers", () => {
  expect(
    Compint((Val = 100), (Duration = 1), (Int = 7), (Invest = 0)).toBe(107)
  );
});
