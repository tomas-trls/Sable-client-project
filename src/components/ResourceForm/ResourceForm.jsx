import React from "react";
import Button from "../Button/Button";
import DropdownField from "../DropdownField/DropdownField";
import InputField from "../InputField/InputField";
import "./ResourceForm.scss";

const ResourceForm = ({
  formPage,
  staff,
  category,
  resourceName,
  optionsArr,
  text,
  isEditResource,
  handleToggle,
}) => {
  const editResourceJSX = () => (
    <div className="resource-form-container">
      <div className="resource-form-container__category">
        {isEditResource ? (
          <InputField
            label="Category Name"
            placeholderText={category}
            id="category"
            editValue="Health"
          />
        ) : (
          <InputField
            label="Category Name"
            placeholderText={category}
            id="category"
          />
        )}
      </div>
      <div className="resource-form-container__staff">
        {isEditResource ? (
          <InputField
            label="Staff Member"
            placeholderText={staff}
            editValue="Mariana"
          />
        ) : (
          <InputField label="Staff Member" placeholderText={staff} />
        )}
      </div>
      <div className="resource-form-container__resource">
        {isEditResource ? (
          <InputField
            label="Resource Name"
            placeholderText={resourceName}
            editValue="Syringe"
          />
        ) : (
          <InputField label="Resource Name" placeholderText={resourceName} />
        )}
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
        {isEditResource ? (
          <InputField label="Auto-Purchase Level" editValue="500" />
        ) : (
          <InputField label="Auto-Purchase Level" />
        )}
      </div>
      <div className="resource-form-container__quantity-remaining">
        {isEditResource ? (
          <InputField label="Quantity Remaining" editValue="50" />
        ) : (
          <InputField label="Quantity Remaining" />
        )}
      </div>
      <div className="resource-form-container__button">
        <Button buttonText={text} />
      </div>
    </div>
  );

  const optionsJSX = optionsArr.map((option, index) => {
    return (
      <option className="option" value={option} key={index}>
        {option}
      </option>
    );
  });
  const healthArr = [
    <option className="option" value="health" key="health option">
      Health
    </option>,
    <option className="option" value="admin" key="admin option">
      Admin
    </option>,
  ];

  const requestResourceJSX = () => (
    <div className="resource-form-container">
      <div className="resource-form-container__category">
        <DropdownField
          label="Category Name"
          placeholderText="Health"
          id="category"
          optionsJSX={healthArr}
        />
      </div>
      <div className="resource-form-container__staff">
        <InputField label="Staff Member" placeholderText={staff} />
      </div>
      <div className="resource-form-container__resource">
        <DropdownField
          label="Resource Name"
          placeholderText="Syringe"
          optionsJSX={optionsJSX}
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
