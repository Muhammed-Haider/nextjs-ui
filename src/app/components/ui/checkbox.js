// components/Checkbox.js

const Checkbox = ({ className = "", ...props }) => {
    return (
        <div>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          className={`form-checkbox h-5 w-5 text-blue-600 ${className}`}
          {...props}
        ></input>
      
      </label>
      </div>
    )
  }
  
  export default Checkbox
  