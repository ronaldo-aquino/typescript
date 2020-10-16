const objeto1: Record<string, string | number> = {
    nome: 'Ronaldo',
    sobrenome: 'Aquino',
    idade: 26,
};

console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaProtocol>;

// Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaPick = {
    nome: 'Ronaldo',
    sobrenome: 'Aquino',
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: 'ewwqerewqfdsg54ewqf54qr54',
    nome: 'Ronaldo',
    idade: 26,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('DADOS DA API', accountApi);

export default 1;
