import {Plugin, IPlugin, IPluginFormFields} from './plugin';

// Classname must be same as the CRD's Name
export class KuberoRedis extends Plugin implements IPlugin {
    public id: string = 'kubero-operator';//same as operator name
    public displayName = 'Kubero Redis'
    public icon = '/img/addons/Redis.png'
    public install: string = ''
    public url = 'https://artifacthub.io/packages/olm/community-operators/kubero-operator'
    public docs = [
        {
            title: 'Kubero Docs', url: ''
        }
    ]
    public artifact_url = 'https://artifacthub.io/api/v1/packages/olm/kubero/kubero-operator'
    public beta: boolean = false;

    public formfields: {[key: string]: IPluginFormFields} = {
        'KuberoRedis.metadata.name':{
            type: 'text',
            label: 'Redis Cluster Name',
            name: 'metadata.name',
            required: true,
            default: 'redis',
            description: 'The name of the redis instance'
        },
        'KuberoRedis.spec.redis.replica.replicaCount':{
            type: 'number',
            label: 'Replica Count*',
            name: 'spec.redis.replica.replicaCount',
            default: '3',
            required: true,
            description: 'Number of replicas'
        },
        'KuberoRedis.spec.redis.global.storageClass':{
            type: 'select-storageclass',
            label: 'Storage Class',
            // options: ['default', 'local-path', 'nfs-client', 'rook-ceph-block'],
            name: 'spec.redis.global.storageClass',
            default: 'default',
            required: true
        },
        'KuberoRedis.spec.redis.master.persistence.size':{
            type: 'text',
            label: 'Master Sorage Size*',
            name: 'spec.redis.master.persistence.size',
            default: '1Gi',
            required: true,
            description: 'Size of the storage'
        },
        'KuberoRedis.spec.redis.replica.persistence.size':{
            type: 'text',
            label: 'Replica Sorage Size*',
            name: 'spec.redis.replica.persistence.size',
            default: '1Gi',
            required: true,
            description: 'Size of the storage'
        },
        'KuberoRedis.spec.redis.global.redis.password':{
            type: 'text',
            label: 'Password*',
            name: 'spec.redis.global.redis.password',
            default: '',
            required: true,
            description: 'Password'
        }
    };

    public env: any[] = []

    protected additionalResourceDefinitions: Object = {}

    constructor(availableOperators: any) {
        super();
        super.init(availableOperators);
    }

}