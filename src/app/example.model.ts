// single example의 구조를 정의하는 인터페이스
export interface ExampleDef {
    label: string;
    name: string;
    path: string;
    component: any;
    dev?:boolean;
}