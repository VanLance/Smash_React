import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface SmashFormProps {
    id?:string;
    data?: {};
}

interface SmashState {
    name: string;
}

export const SmashForm= ( props:SmashFormProps ) => {
    const dispatch = useDispatch();

    let {smashData, getData} = useGetData();
    const store = useStore();

    const name = useSelector<SmashState>(state => state.name)

    const { register, handleSubmit } = useForm ({ })

    const onSubmit = async (data:any, event: any) => {
        console.log(props.id)

        
        if (props.id!){
            await server_calls.update(props.id!, data)
            console.log(`updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch (chooseName(data.name))
            
            await server_calls.create(store.getState())
            window.location.reload();
        }
    }
        return(
            <div>
                <form onSubmit= {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Character Name</label>
                    <Input {...register('name')} name='name' placeholder='Name' />
                </div>
                <div>
                    <label htmlFor='name'>Description</label>
                    <Input {...register('description')} name='description' placeholder='Description' />
                </div>
                <div>
                    <label htmlFor='name'>Games Appeared In</label>
                    <Input {...register('games_appeared_in')} name='games_appeared_in' placeholder='Games Appeared In' />
                </div>
                <div>
                    <label htmlFor='name'>Abilities</label>
                    <Input {...register('abilities')} name='abilities' placeholder='Abilities' />
                </div>
                <div>
                    <label htmlFor='name'>Weight</label>
                    <Input {...register('weight')} name='weight' placeholder='Weight' />
                </div>
                <div>
                    <label htmlFor='name'>Jumps</label>
                    <Input {...register('jumps')} name='jumps' placeholder='Jumps' />
                </div>

                <Button type= 'submit'>Submit</Button>
                </form>
            </div>

        )

}