import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let GAMES;

    beforeEach(() => {
        GAMES = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }
        ];

        component = new DashboardComponent();
    });

    describe('should show 10 games in the list', () => {
        component.dataSource = GAMES;

        expect(component.dataSource.length).toBe(10);
    });
});
