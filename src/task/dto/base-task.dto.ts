export class TaskDto {
    readonly id: number;
    readonly title: string;
    readonly description?: string;
    readonly author?: string;
    readonly status: string;
}