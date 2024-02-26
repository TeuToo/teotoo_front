import Button from "@/components/Button";
import Link from "next/link";
export default function ButtonBundle() {
  return (
    <>
      <Link href="../../editInfo/locationModal">
        <Button>위치 수정하기</Button>
      </Link>
      <Button type="submit" backgroundColor="bg-[#1C743C]" className="mt-2.5">
        회원 정보 수정하기
      </Button>
    </>
  );
}
