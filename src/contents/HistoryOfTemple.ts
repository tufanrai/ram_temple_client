interface IHistory {
  title: string;
  sub_title: string;
  paragraph: string[];
}

interface IOfferings {
  title: string;
  paragraph: string;
}

export const History: IHistory[] = [
  {
    title: "About Ram Chandra Temple",
    sub_title: "The Ramachandra temple: view from the south",
    paragraph: [""],
  },
];

export const Offerings: IOfferings = {
  title: "Offerings!",
  paragraph: "",
};
