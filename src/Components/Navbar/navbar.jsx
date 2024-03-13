import React, {useState} from "react";
import "./navbar.css";
import Select from "react-select";
;
const options=[
    {label: "Delhi", value: "delhi"},
    {label: "Mumbai", value: "mumbai"},
    {label: "Hyderabad", value: "hyderabad"},
    {label: "Kanpur", value: "kanpur"},
    {label: "Chennai", value: "chennai"},
    {label: "Kolkata", value: "kolkata"},
];
// const today = new Date();
// const formattedToday = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;
const modes=[
    {label: "Train", value: "train"},
    {label: "Flight", value: "flight"},
]
export default function Navbar(){
    const today = new Date();
    const [date, setDate] = useState(today.toISOString().split('T')[0]);
    const [selectedOption, setSelectedOption]=useState(options[3]);
    const [selectedMode, setSelectedMode]=useState(modes[0]);
    const [selectedOption1, setSelectedOption1]=useState(options[2]);
    const handleChange=(selectedOption)=>{
        setSelectedOption(selectedOption);
    };
    const handleChange1=(selectedOption1)=>{
        setSelectedOption1(selectedOption1);
    };
    const handleChange2=(selectedMode)=>{
        setSelectedMode(selectedMode);
    };
    const selectStyles = {
        control: (provided) => ({
            ...provided,
            width: '100%',
            outerHeight: '100%', 
            backgroundColor: 'gray',
            borderColor: 'gray',
            border: 'none',
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            color: 'black', // Set the text color for options
            cursor: 'pointer',
          }),
          singleValue: (provided) => ({
            ...provided,
            color: 'white', 
            fontSize: 'large',
            fontWeight: '600',
          }),
    };
    const dateInputStyles = {
        backgroundColor: 'gray',
        borderRadius: '15px',
        height: '80px',
        alignItems: 'center',
        padding: '0px 25px',
        marginLeft: '25px',
        cursor: 'pointer',
        color: 'white',
        border: 'none',
        fontSize: 'large',
        fontWeight: 600,
      };
    
    return(
        <nav className="navbar">
            <div className="nav-cities">
                <div >
                <Select options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    styles={selectStyles}
                    className="nav_departure_station" 
                />
                </div>
                <div className="icon "><i className="material-icons">sync_alt</i></div>
                <div >
                <Select options={options}
                        value={selectedOption1}
                        onChange={handleChange1}
                        styles={selectStyles}
                        className="nav_arrival_station" 
                />
                </div>
            </div> 
            <div className="nav-time -mt-1">
            <div className="pt-1">
                <input className="nav_date" type="date" onChange={e=>setDate(e.target.value)} style={dateInputStyles}/>
            </div>
            <div className="pt-1">
                <Select options={modes}
                    value={selectedMode}
                    onChange={handleChange2}
                    styles={selectStyles}
                    className="nav_mode"
                />
            </div>
            </div>
        </nav>
    )
} 