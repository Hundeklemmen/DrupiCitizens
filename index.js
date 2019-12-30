require("PluginLoaded")("Citizens", () => {
    var Citizens = manager.loadExternal(manager.getPluginFile("Citizens"));
    var CitizensAPI = Citizens.loadClass("net.citizensnpcs.api.CitizensAPI");
    var registry = CitizensAPI.getDeclaredMethod("getNPCRegistry").invoke(null);
    var NPCSelector = CitizensAPI.getDeclaredMethod("getDefaultNPCSelector").invoke(null); 

    module.exports = {
        getNPCRegistry: () => registry,
        getNPCSelector: () => NPCSelector,
        get: id => registry.getById(id),
        create: (name, type) => {
            if(!name) return;
            if(!type) type = org.bukkit.entity.EntityType.PLAYER;
            return registry.createNPC(type, name);
        },
        spawn: (npc, location, skin) => {
            if(npc.isSpawned() || !location) return;
            npc.spawn(location);
            
            if(skin){
                var skinnable = java.lang.Class.forName("net.citizensnpcs.npc.skin.SkinnableEntity", false, Citizens).cast(npc.getEntity()); 
                if(typeof skin == "string"){
                    skinnable.setSkinName(skin, true);
                } else if(typeof skin == "object" && skin.uuid && skin.signature && skin.data){
                    skinnable.setSkinPersistent (
                        skin.uuid,
                        skin.signature,
                        skin.data
                    )
                }
            }
        },
        setSkin: (npc, skin) => {
            if(!skin) return;
            if(!npc.isSpawned()) return;
            var skinnable = java.lang.Class.forName("net.citizensnpcs.npc.skin.SkinnableEntity", false, Citizens).cast(npc.getEntity()); 
            if(typeof skin == "string"){
                skinnable.setSkinName(skin, true);
            } else if(typeof skin == "object" && skin.uuid && skin.signature && skin.data){
                skinnable.setSkinPersistent(
                    skin.uuid,
                    skin.signature,
                    skin.data
                )
            }
        },
        on: (eventType, eventHandler) => event.addListenerExternal(Citizens.loadClass("net.citizensnpcs.api.event." + eventType), eventHandler)
    };
});