import Provider from '../model/Provider';

export const allProviders = async (req, res) => {
    try {
        const providers = await Provider.find();
        res.status(200).send(providers);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const createProvider = async (req, res) => {
    try {
        const provider = new Provider(req.body);
        await provider.save()
        res.status(201).send(provider);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateProvider = async (req, res) => {
    try {
        const { id } = req.params;
        const provider = await Provider.findOneAndUpdate({_id: id}, req.body);
        res.status(201).send(provider);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteProvider = async (req, res) => {
    try {
        const { id } = req.params;
        const provider = await Provider.findOneAndDelete({_id: id});
        res.status(200).send(provider);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
