const Cookings = ({
  wantCooking,
  handleCurrentCooking,
  cooking,
  calculateTotalTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="w-1/3 border border-gray-600 rounded-lg">
      <h1 className="text-4xl font-bold text-center underline mb-5">
        Want to Cook: {wantCooking.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calorie</th>
              <th></th>
            </tr>
          </thead>

          {wantCooking.map((cooking, idx) => (
            // eslint-disable-next-line react/jsx-key
            <tbody>
              <tr>
                <th>{idx + 1}</th>
                <td>{cooking.recipe_name}</td>
                <td>{cooking.preparing_time}</td>
                <td>{cooking.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleCurrentCooking(cooking);
                      calculateTotalTimeAndCalories(
                        cooking.preparing_time,
                        cooking.calories
                      );
                    }}
                    className="btn btn-primary rounded-3xl"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {/* Currently Cooking */}

      <h1 className="text-4xl font-bold text-center underline mb-5">
        Currently Cooking: {cooking.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calorie</th>
            </tr>
          </thead>

          {cooking.map((cooking, idx) => (
            // eslint-disable-next-line react/jsx-key
            <tbody>
              <tr>
                <th>{idx + 1}</th>
                <td>{cooking.recipe_name}</td>
                <td>{cooking.preparing_time}</td>
                <td>{cooking.calories}</td>
              </tr>
            </tbody>
          ))}

          <tbody>
            <tr>
              <th></th>
              <td></td>
              <td>Total Time = {totalTime} </td>
              <td>Total Calories = {totalCalories} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cookings;
