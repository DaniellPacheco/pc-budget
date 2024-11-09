const ComponentService = require("../services/ComponentService");
const ComponentRepository = require("../repositories/ComponentRepository");

class ComponentController {

    async index(req, res) {

        const componentRepository = new ComponentRepository();
        const componentService = new ComponentService(componentRepository);

        const components = await componentService.index();

        res.json(components);
        
    }

    async show(req, res) {

        const id = req.params;

        const componentRepository = new ComponentRepository();
        const componentService = new ComponentService(componentRepository);

        const component = await componentService.show(id);

        res.json(component);

    }

    async create(req, res) {

        const { name, value, installment, category, created_at } = req.body;
        console.log(req.body);

        const componentRepository = new ComponentRepository();
        const componentService = new ComponentService(componentRepository);

        const component = await componentService.create({name, value, installment, category, created_at});

        res.json({
            message: "Component created successfully",
            component
        });

    }

    async update(req, res) {

        const id = req.params;
        const { name, value, installment, category, created_at } = req.body;

        const componentRepository = new ComponentRepository();
        const componentService = new ComponentService(componentRepository);

        const component = await componentService.update({id, name, value, installment, category, created_at})

        res.json({
            message: "Component updated successfully",
            component
        })
    }

    async delete(req, res) {

        const id = req.params;

        const componentRepository = new ComponentRepository();
        const componentService = new ComponentService(componentRepository);

        await componentService.delete(id);

        res.json({ message: "Component deleted successfully"});

    }


}

module.exports = ComponentController