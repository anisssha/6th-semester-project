export const color = [
    "white",
    "Black",
    "Red",
    "Maroon",
    "Pink",
    "Green",
    "Yellow",
  ];
  
  export const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
        { value: "yellow", label: "Yellow" },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
      ],
    },
  ];
  
  export const singleFilter = [
    {
      id: "price",
      name: "Price",
      options: [
        { value: "159-399", label: "Rs.1000 To Rs.2000" },
        { value: "399-999", label: "Rs.2000 To Rs.4000" },
        { value: "999-1999", label: "Rs.4000 To Rs.5000" },
        { value: "1999-2999", label: "Rs.5000 To Rs.5500" },
        { value: "3999-4999", label: "Rs.5500 To Rs.6000" },
      ],
    },
    {
      id: "discount",
      name: "Discount Range",
      options: [
        { value: "10", label: "10% And Above" },
        { value: "20", label: "20% And Above" },
        { value: "30", label: "30% And Above" },
        { value: "40", label: "40% And Above" },
        { value: "50", label: "50% And Above" },
        { value: "60", label: "60% And Above" },
        { value: "70", label: "70% And Above" },
        { value: "80", label: "80% And Above" },
      ],
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: "in_stock", label: "In Stock" },
        { value: "out_of_stock", label: "Out of Stock" },
      ],
    },
  ];
  