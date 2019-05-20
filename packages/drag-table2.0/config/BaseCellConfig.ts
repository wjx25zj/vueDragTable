import { BaseContainerConfig } from './BaseContainerConfig';
import { DisplayClassInterface, VerificationInterface } from '../interface/viewModule/cell/BaseCellInterface';

export class BaseCellConfig extends BaseContainerConfig {
    public readonly?: boolean; // 表头是否可以编辑
    public oldValue: string = '';
    public content: any = ''; // 内容
    public positionManagerId?: string;
    public selectionStart: number = 0;
    public title: any = '';
    public status: 'normal' | 'dbclick' | 'readonly' = 'normal';
    public displayType: 'text' | 'select' | 'input' = 'text';
    public style?: any = {
        fontSize: 12,
        float: 'left',
        // padding:'0px 5px',
        color: '#000',
        textAlign: 'center',
        width: '110px',
        height: '28px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'block',
        userSelect: 'none',
        // background: 'transparent',
    };

    public displayClass: DisplayClassInterface = {
        normal: {
            displayType: 'text',
        },
        dbclick: {
            displayType: 'input',
            select: {
                optionList: [
                ],
            },
        },
        readonly: {
            displayType: 'text'
        }
    };
    // 格式
    public formatter: string = '';
    // 验证
    public verification: VerificationInterface = {
        state: true,
        hasVerification: false,
        vTypes: [], //
        message: {
            integer: '必须输入整型',
            notNull: '该项是必填项',
            number: '您好请输入数字类型:例如 123|32|3.5....',
            date: '您好请输入正确时间:例如 2019-01-01',
            decimal: '您好请输入正确数字'
        }
    };
}
