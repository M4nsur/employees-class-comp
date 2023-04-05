import "./app-info.css"

const AppInfo = ({amountEmp, increaseEmp}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ZSAM.dev</h1>
            <h2>Общее число сотрудников: {amountEmp}</h2>
            <h2>Премию получат: {increaseEmp}</h2>
        </div>
    )
}

export default AppInfo;