const EvaluationBar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full bg-white p-4 rounded-3xl">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">
            Overall Score
          </p>
          <p className="text-[24px] font-bold">
            Remark : <span className="text-green-600">Good</span>
          </p>
          <p className="text-xs font-semibold text-muted-foreground text-[#98A1BB]">
            Evaluated on 12 Jul 2024
          </p>
        </div>
        <div className="relative w-16 h-16">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
            <circle
              className="text-gray-300"
              strokeWidth="3.8"
              stroke="#EAF0F2"
              fill="none"
              cx="18"
              cy="18"
              r="15.91549431"
            />
            <circle
              className="text-green-600"
              strokeWidth="3.8"
              strokeDasharray="65, 100"
              strokeLinecap="round"
              stroke="#3CC28A"
              fill="none"
              cx="18"
              cy="18"
              r="15.91549431"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-md font-bold">
            13/20
          </div>
        </div>
      </div>
    </>
  );
};

export default EvaluationBar;
