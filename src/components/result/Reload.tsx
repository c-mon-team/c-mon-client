import React from 'react';

interface ReloadProps {
  getData: () => void;
}

function Reload(props: ReloadProps) {
  const { getData } = props;

  const reload = () => {
    getData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-25 bg-gray3 flex flex-col justify-center items-center">
      <button onClick={reload}>
        <img src="/assets/icons/ic_reload.svg" alt="reload" />
      </button>
      <p className="text-body2 text-gray9 mt-20 text-center">
        아직 결과가 안나왔나요? 새로고침을 눌러보세요
      </p>
    </div>
  );
}

export default Reload;
