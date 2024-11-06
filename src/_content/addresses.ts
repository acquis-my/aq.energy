interface Address {
  name: string;
  address: string;
  mapLink: string;
}

export const addresses = [
  {
    name: "Selangor (HQ)",
    address:
      "10, Jalan Delta U6/19, Sunway Subang Business Park, 40150 Shah Alam, Selangor",
    mapLink: "https://maps.app.goo.gl/pvt4L46jAopBCbWJ6",
  },
  {
    name: "Penang",
    address:
      "55, Jalan Perai Jaya 5, Bandar Perai Jaya, 13700 Perai, Pulau Pinang",
    mapLink: "https://maps.app.goo.gl/YYnu3aMXYTvHAxLS9",
  },
  // Add more addresses as needed
] satisfies Address[];
