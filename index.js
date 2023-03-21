const info = [
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
];

const vaxTrail = (data) => {
  return {
    A: data?.filter(
      (personInfo) =>
        personInfo?.age >= 20 &&
        personInfo?.age <= 30 &&
        personInfo?.temperature < 100
    ),
    B: data?.filter(
      (personInfo) =>
        personInfo?.age > 30 &&
        personInfo?.age <= 40 &&
        personInfo?.temperature < 100
    ),
    C: data?.filter(
      (personInfo) =>
        personInfo?.age > 40 &&
        personInfo?.age <= 50 &&
        personInfo?.temperature < 100
    ),
    D: data?.filter((personInfo) => personInfo?.temperature >= 100),
  };
};

const result = vaxTrail(info);

// console.log(result);
