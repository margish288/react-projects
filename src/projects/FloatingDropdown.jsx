import React from "react";

const dropdownData = [
  {
    id: 1,
    name: "Option 1",
    children: [
      {
        id: 1.1,
        name: "Option 1.1",
      },
    ],
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
    children: [
      {
        id: 3.1,
        name: "Option 3.1",
      },
      {
        id: 3.1,
        name: "Option 3.1",
      },
    ],
  },
  {
    id: 4,
    name: "Option 4",
  },
  {
    id: 5,
    name: "Option 5",
  },
];

const FloatingDropdown = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [cordinates, setCordinates] = React.useState({ x: 0, y: 0 });
  const [submenu, setSubmenu] = React.useState(false);
  const [submenuData, setSubmenuData] = React.useState([]);
  const [subcordinates, setSubCordinates] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    setShowDropdown(!showDropdown);
    setCordinates({ x: e.clientX, y: e.clientY });

    setSubCordinates({ x: 0, y: 0 });
    setSubmenuData([]);
  };

  return (
    <div className="bg-sky-950 h-screen relative" onClick={handleContextMenu}>
      <h2 className="text-2xl text-center pt-24 text-white">
        Click anywhere to open context menu
      </h2>
      {showDropdown && (
        <>
          <div
            className="bg-slate-400 inline-block p-2 rounded-sm"
            style={{
              position: "fixed",
              top: cordinates.y,
              left: cordinates.x,
            }}
          >
            {dropdownData.map((dropdownItem) => (
              <div
                key={dropdownItem.id}
                className="bg-sky-850 text-black p-2 cursor-pointer"
              >
                <span>{dropdownItem.name}</span>
                {dropdownItem.children && (
                  <div className="inline-block">
                    <span
                      className="ml-2"
                      onMouseEnter={(e) => {
                        const x = e.clientX;
                        const y = e.clientY;

                        setSubCordinates({ x, y });

                        setSubmenuData(dropdownItem.children);
                        setSubmenu(true);
                      }}
                      // onMouseLeave={() => {
                      //   setSubmenuData([]);
                      //   setSubmenu(false);
                      // }}
                    >
                      &gt;
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {submenu && (
            <div
              className="bg-slate-400 inline-block p-2 rounded-sm"
              style={{
                position: "fixed",
                top: subcordinates.y - 20,
                left: subcordinates.x + 20,
              }}
            >
              {submenuData.map((submenuItem) => (
                <div
                  key={submenuItem.id}
                  className="bg-sky-850 text-black p-2 cursor-pointer"
                >
                  <span>{submenuItem.name}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FloatingDropdown;
