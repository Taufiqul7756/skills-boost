import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Divider } from "@nextui-org/react";

interface ProductData {
  [key: string]: string[];
}

const CoursesDropdown: React.FC = () => {
  const [data, setData] = useState<ProductData>({});
  const [loading, setLoading] = useState(true);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (range: string) => {
    setSelectedRange(range);
  };

  const filterDataByRange = (range: string | null, data: ProductData) => {
    if (!range) return {};

    const ranges: { [key: string]: string[] } = {
      "A-C": ["A", "B", "C"],
      D: ["D"],
      E: ["E"],
      "F-G": ["F", "G"],
      "H-L": ["H", "I", "J", "K", "L"],
      "M-P": ["M", "N", "O", "P"],
      "Q-R": ["Q", "R"],
      S: ["S"],
      "T-V": ["T", "U", "V"],
      "W-Z": ["W", "X", "Y", "Z"],
    };

    const selectedChars = ranges[range];
    const filteredData: ProductData = {};

    Object.entries(data).forEach(([category, items]) => {
      const filteredItems = items.filter((item) =>
        selectedChars.includes(item[0].toUpperCase())
      );
      if (filteredItems.length > 0) {
        filteredData[category] = filteredItems;
      }
    });

    return filteredData;
  };

  const filteredData = filterDataByRange(selectedRange, data);

  return (
    <div className="flex">
      <div className="w-2/6 overflow-y-scroll h-96 p-4 bg-white">
        {loading ? (
          <p>Loading...</p>
        ) : (
          Object.entries(data).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h2 className="font-bold">{category}</h2>
              {items.map((item, index) => (
                <div key={index} className="mt-2">
                  {item}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      <div className="w-4/6 p-4 bg-white">
        <h1 className="font-semibold mb-3">All Products</h1>
        <Divider className="mb-3" />
        <ButtonGroup>
          {["A-C", "D", "E", "F-G", "H-L", "M-P", "Q-R", "S", "T-V", "W-Z"].map(
            (range) => (
              <Button
                size="sm"
                key={range}
                onClick={() => handleButtonClick(range)}
                className={`rounded-none border border-spacing-2  ${
                  selectedRange === range
                    ? "bg-default text-white"
                    : "bg-white text-black"
                }`}
              >
                {range}
              </Button>
            )
          )}
        </ButtonGroup>
        <div className="mt-4">
          {selectedRange && (
            <>
              <h2 className="font-bold mb-3">
                Filtered Products ({selectedRange})
              </h2>
              <Divider className="mb-3" />
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(filteredData).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <h3 className="font-bold">{category}</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {items.map((item, index) => (
                        <div key={index} className="mt-2">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesDropdown;
