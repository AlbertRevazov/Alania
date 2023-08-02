export type AboutDatatype = {
  id: number;
  title: string;
  description: string;
  img: string;
};

export const AboutData: AboutDatatype[] = [
  {
    id: 1,
    title: "Lorem",
    description: `Lorem ipsum dolor,
     sit amet consectetur adipisicing elit.
     Sunt amet quisquam nostrum explicabo esse eius quia tempora,
     libero eligendi incidunt magnam odio praesentium vel
     culpa in molestiae id laborum veniam?`,
    img: "/images/fiagdon_third.jpg",
  },
  {
    id: 2,
    title: "Borem",
    description: `Lorem ipsum dolor,
     sit amet consectetur adipisicing elit.
     Sunt amet quisquam nostrum explicabo esse eius quia tempora,
     libero eligendi incidunt magnam odio praesentium vel
     culpa in molestiae id laborum veniam?`,
    img: "/images/zaramag_ges.jpg",
  },
  {
    id: 3,
    title: "Horem",
    description: `Lorem ipsum dolor,
     sit amet consectetur adipisicing elit.
     Sunt amet quisquam nostrum explicabo esse eius quia tempora,
     libero eligendi incidunt magnam odio praesentium vel
     culpa in molestiae id laborum veniam?`,
    img: "/images/ekskurs.jpg",
  },
];
