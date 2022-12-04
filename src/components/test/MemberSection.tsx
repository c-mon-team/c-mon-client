import { Group } from 'types/index';

const TEST_MEMBER = ['전희선', '써니', '아놔', '크킄', '재밌다', '사실', '안재밌음옹뇽'];

interface MemberSectionProps {
  groupInfo: Group | undefined;
}
function MemberSection(props: MemberSectionProps) {
  const { groupInfo } = props;

  return (
    <div className="w-300 h-185 grid grid-cols-4 grid-rows-3">
      {/* //* 여기 바꿔야됨 */}
      {groupInfo?.members &&
        TEST_MEMBER.map((name) => (
          <span key={name} className="text-gray9 text-body3 text-center">
            {name}
          </span>
        ))}
    </div>
  );
}

export default MemberSection;
