import { Group } from 'types/index';

interface MemberSectionProps {
  groupInfo: Group | undefined;
}
function MemberSection(props: MemberSectionProps) {
  const { groupInfo } = props;

  return (
    <div className="w-300 h-185 grid grid-cols-4 grid-rows-3">
      {groupInfo?.members &&
        groupInfo?.members.map(({ name }) => (
          <span key={name} className="text-gray9 text-body3 text-center">
            {name}
          </span>
        ))}
    </div>
  );
}

export default MemberSection;
