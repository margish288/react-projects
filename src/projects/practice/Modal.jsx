import React from "react";

// modalType : popup | modal
// data: {title, description}
// open : true | false
// setOpen : () => {}  : state handler
// children : <JSX />  : to open modal

const Modal = ({ data, modalType = "modal", open, setOpen, children }) => {
  const {
    title = "Your title goes here...",
    description = "Your description goes here...",
  } = data || {};

  return (
    <>
      <div className={`modal-overlay ${open ? "bg-black opacity-60" : ""}`}>
        {children}
      </div>
      {/* modal */}
      {open && (
        <div className={`modal-wrapper ${modalType}`}>
          <div className="modalContent">
            <h1 className="text-center text-3xl px-2 py-4 border-b border-b-stone-400">
              {title}
            </h1>
            <p className="text-xl px-2 py-4 modal-description">{description}</p>
          </div>

          <div className="modal-buttons">
            <button
              className="px-2 py-1 bg-slate-100 text-black font-semibold border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>
            <button
              className="px-2 py-1 bg-slate-100 text-black font-semibold border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300"
              onClick={() => {
                setOpen(false);
                alert("Pressed OK !");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const ModalUse = () => {
  const [open, setOpen] = React.useState(false);
  const data = {
    title: "This is sample modal title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illum soluta non, nam debitis, libero sequi quaerat voluptate nisi odit aut eos aliquam sint, hic ratione quisquam maiores magni voluptatem. ",
  };

  React.useEffect(() => {
    const [pathname] = window.location.pathname.split("/").slice(-1);
    const [state] = window.location.search.split("?").slice(-1);

    if (pathname === "modal" && state === "open") {
      setOpen(true);
    }
  }, []);

  // CAN TRY : put this url on yout addressbar after the localhost "/practice/modal?open "
  return (
    <Modal data={data} modalType="modal" open={open} setOpen={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="px-2 py-1 bg-slate-100 text-black font-semibold border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300"
      >
        Open Modal
      </button>
    </Modal>
  );
};

export default ModalUse;
