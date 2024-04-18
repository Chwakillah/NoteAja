/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  return (
    <div className="container mx-auto bg-soft">
      <div className="p-4 flex gap-3">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered border-none input-secondary w-full max-w-xs bg-whitepink placeholder-darkpink placeholder"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="btn bg-darkpink text-whitepink border-none"
          onClick={saveHandler}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

CreateNote.propTypes = {
  inputText: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
};

export default CreateNote;
