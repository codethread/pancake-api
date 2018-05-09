import { send } from '../helpers/send';
import { limit } from '../graphql/queries';
import { gitGQL } from '../shared/endpoints';


async function requestLimit(req, res) {
    console.log('hitting limit');
    try {
        console.log(limit);
        const data = await send(limit)(gitGQL);

        res.json(data);
    } catch (err) {
        res.json({ errors: err.message });
    }
}

export { requestLimit };
