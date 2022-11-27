import React from 'react';

interface ReloadProps {
  getData: () => void;
}

function Reload(props: ReloadProps) {
  const { getData } = props;

  return (
    <div className="py-25 px-57 bg-gray3 flex flex-col justify-center items-center">
      <button onClick={getData}>
        <img src="/assets/icons/ic_reload.svg" alt="reload" />
      </button>
      <p className="text-body2 text-gray9 mt-20 text-center">
        아직 결과가 안나왔나요? 새로고침을 눌러보세요
      </p>
    </div>
  );
}

export default Reload;
