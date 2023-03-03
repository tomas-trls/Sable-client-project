import React from "react";
import Button from "../Button/Button";
import DropdownField from "../DropdownField/DropdownField";
import InputField from "../InputField/InputField";
import "./ResourceForm.scss";

const ResourceForm = ({
  formPage,
  resource,
  optionsArr,
  text,
  handleToggle,
  staff,
  category,
}) => {
  const editResourceJSX = () => (
    <div className="resource-form-container">
      <div className="resource-form-container__category">
        <InputField
          label="Category Name"
          placeholderText={resource.category}
          id="category"
          editValue="Health"
        />
      </div>
      <div className="resource-form-container__staff">
        <InputField
          label="Staff Member"
          placeholderText={"Mariana"}
          editValue="Mariana"
        />
      </div>
      <div className="resource-form-container__resource">
        <InputField label="Resource Name" placeholderText={resource.name} />
      </div>
      <div className="resource-form-container__checkbox">
        <h2 className="resource-form-container__checkbox--label">
          Auto-Purchase
        </h2>
        <div className="resource-form-container__checkboxes">
          <div className="resource-form-container__checkbox--yes">
            <label htmlFor="autopurchase-yes">Yes</label>
            <input
              type="radio"
              name="autopurchase"
              id="autopurchase-yes"
            ></input>
          </div>
          <div className="resource-form-container__checkbox--no">
            <label htmlFor="autopurchase-no">No</label>
            <input
              type="radio"
              name="autopurchase"
              id="autopurchase-No"
            ></input>
          </div>
        </div>
      </div>
      <div className="resource-form-container__auto-purchase">
        <InputField
          label="Auto-Purchase Level"
          editValue={resource.autoPurchaseLevel}
        />
      </div>
      <div className="resource-form-container__quantity-remaining">
        <InputField label="Quantity Remaining" editValue={resource.quantity} />
      </div>
      <div className="resource-form-container__button">
        <Button buttonText={text} />
      </div>
    </div>
  );

  const requestResourceJSX = () => (
    <div className="resource-form-container">
      <div className="resource-form-container__category">
        <DropdownField
          label="Category Name"
          placeholderText={category}
          id="category"
          optionsJSX={["Health", "Admin"]}
        />
      </div>
      <div className="resource-form-container__staff">
        <DropdownField
          label="Staff"
          placeholderText="Staff"
          optionsJSX={staff.map((staff) => staff.name)}
        />
      </div>
      <div className="resource-form-container__resource">
        <DropdownField
          label="Resource Name"
          placeholderText="Syringe"
          optionsJSX={optionsArr.map((option) => option)}
        />
      </div>
      <div className="resource-form-container__checkbox">
        <h2 className="resource-form-container__checkbox--label">
          Auto-Purchase
        </h2>
        <div className="resource-form-container__checkboxes">
          <div className="resource-form-container__checkbox--yes">
            <label htmlFor="autopurchase-yes">Yes</label>
            <input
              type="radio"
              name="autopurchase"
              id="autopurchase-yes"
            ></input>
          </div>
          <div className="resource-form-container__checkbox--no">
            <label htmlFor="autopurchase-no">No</label>
            <input
              type="radio"
              name="autopurchase"
              id="autopurchase-No"
            ></input>
          </div>
        </div>
      </div>
      <div className="resource-form-container__auto-purchase">
        <InputField label="Auto-Purchase Level" placeholderText="50" />
      </div>
      <div className="resource-form-container__quantity-remaining">
        <InputField label="Quantity Remaining" placeholderText="500" />
      </div>
      <div className="resource-form-container__button">
        <Button buttonText={text} handleClick={handleToggle} />
      </div>
    </div>
  );

  return (
    <>
      {formPage === "editResource"
        ? editResourceJSX()
        : formPage === "requestResource"
        ? requestResourceJSX()
        : alert("unknown page")}
    </>
  );
};

export default ResourceForm;
